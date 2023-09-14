export const fadeUpAnimation = {
    hidden : {
        opacity : 0,
        y: 50,
    },
    visible : {
        opacity : 1,
        y : 0,
        transition : {
            // delay : 0.5,
            duration : 1,
            type : "spring",
        }
    },
}

export const fadeUpVariants = {
    hidden : { opacity : 0, y : 75},
    visible : (index : number) => ({ 
        opacity : 1,
        y : 0,
        transition : {
            delay : 0.01*index,
            duration : 1,
        },
    })


}
export const fadeInAnimation = {
    hidden : {
        opacity :0,
        y:-50,
    },

    animate : (index:number) => ({
        opacity : 1,
        y : 0,
        transitiion : {
            delay : 3* index,
            duration : 3,
        }
    })
}
export const fadeInAnimation2 = {
    hidden : {
        opacity :0,
    },

    animate : (index:number) => ({
        opacity : 1,
        transitiion : {
            delay : 3* index,
            duration : 3,
        }
    })
}