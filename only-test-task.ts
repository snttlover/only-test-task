const groupBy = <T, G>(data: Array<T>, func: (arg: T) => G ) => 
    data.reduce< Map<G, T[]>>((result, current)=>{
        const k = func(current)
        if (result.has(k)) {
            const currentKeyArray = result.get(k)
            return result.set(k, currentKeyArray?[...currentKeyArray, current]:[current])
        }
        return result.set(k, [current])
    }, new Map())


console.log(groupBy([1.2, 1.1, 2.3, 0.4], Math.floor))

console.log(groupBy(["one", "two", "three"], (el) => el.length))

enum Gender {
  Male,
  Female,
}

console.log(groupBy(
  [
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
  (el) => el.g
))
