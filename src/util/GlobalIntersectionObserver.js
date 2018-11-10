// @flow

class IntersectionManager {

    static INTERSECTION_CONFIG = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.1
    };

    elementMapping: Map<HTMLElement, () => void> = new Map();
    instanceObserver: IntersectionObserver;
    config: IntersectionObserverOptions;

    constructor( options: IntersectionObserverOptions = IntersectionManager.INTERSECTION_CONFIG ) {
        this.config = options;
        this.instanceObserver = new IntersectionObserver( this.onIntersections.bind( this ), this.config );
    }

    isValidIntersection( entry: IntersectionObserverEntry ): boolean {

        if ( typeof IntersectionManager.INTERSECTION_CONFIG.threshold === 'object' ) {
            console.warn( 'IntersectionManager: doesnt support definition of threshold as an array' );
            return false;
        }

        if ( IntersectionManager.INTERSECTION_CONFIG.threshold === null ||
             typeof IntersectionManager.INTERSECTION_CONFIG.threshold === 'undefined' ) {
            console.warn( 'IntersectionManager: please supply a non null threshold' );
            return false;
        }

        return entry.intersectionRatio >= IntersectionManager.INTERSECTION_CONFIG.threshold &&
                entry.isIntersecting;
    }

    onIntersections( entries: Array<IntersectionObserverEntry> ): void {

        entries.forEach( ( entry: IntersectionObserverEntry ): void => {
            if ( this.isValidIntersection( entry ) ) {
                const mapCallback: ?() => void = this.elementMapping.get( entry.target );

                if ( !mapCallback ) {
                    console.warn( 'IntersectionManager: no callback found in map for element!' );
                    return;
                }

                // we invoke the callback and then make sure we remove this element from contention
                mapCallback();
                this.instanceObserver.unobserve( entry.target );
                this.elementMapping.delete( entry.target );
            }
        } );
    }

    addElement( element: HTMLElement, callback: () => void ): void {

        if ( this.elementMapping.has( element ) ) {
            console.warn( 'IntersectionManager: element already exists in the mapping cant re add !!' );
            return;
        }

        this.elementMapping.set( element, callback );
        this.instanceObserver.observe( element );
    }
}

export default new IntersectionManager();
