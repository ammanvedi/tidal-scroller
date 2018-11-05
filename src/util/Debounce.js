//@flow

export function debounceFunction( callback: ( ...args: Array<mixed> ) => mixed, bounceMs: number = 500 ): () => void  {

    let timeout: TimeoutID;

    return () => {
        if ( timeout ) {
            clearTimeout( timeout );
        }
        timeout = setTimeout( callback, bounceMs );
    }
}
