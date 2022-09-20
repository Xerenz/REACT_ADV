export function Upper() {
    return function(target:object, propertyKey:string) {
        
        let val = "";  

        const setter = (data:string) => {
            val = data.toUpperCase();
        }

        const getter  = () => val;

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })

    }
}