// factory for decorator
export function Course(config:any) {
    return function(target:any) {
         Object.defineProperty(target.prototype, 'subject', {
                value: config.name
         });
    }
}

// Closure is a mechanism where inner function can access members of outer function