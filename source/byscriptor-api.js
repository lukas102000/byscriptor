const Byscripor = ()=>{
    // cripters
    const criptor =  (words)=>{
        const alfabet = _disctionary()
        const position = words.length
        var results = ""
        for(let i=0; i < words.length; i++){
            const letter = words[i]
            if(letter === " "){ results = `${results} `}
            else 
            {
                for(let [key, values] of alfabet)
                {

                    if(values === letter.toLowerCase())
                    {
                        if(position + key > alfabet.size)
                        {
                            let controls = true
                            let counter = 1
                            while (controls)
                            {
                                const newDict = new Map()
                                for(let [key2, values2] of alfabet)
                                {
                                    key2 = key2 + counter * alfabet.size
                                    newDict.set(key2, values2)
                                }
                                if(newDict.get(position + key) != undefined)
                                {
                                    results = `${results}${newDict.get(position + key)}`
                                    controls = false
                                }
                                counter += 1
                            }
                        }
                        else
                        {
                            results = `${results}${alfabet.get(position + key)}`
                        }
    
                    }
    
                }
            }
        }
       return { results }
    }
    //decpiters
    const descriptor = (words) =>{
        const alfabet =_disctionary()
        const position = words.length
        let results = ""
        for(let i=0; i< words.length; i++){
            const letter = words[i]
            if(letter === " ")
            { 
                results = `${results} `
            }
            else
            {
                for(let [key, value] of alfabet)
                {
                    if(value === letter.toLowerCase())
                    {
                        if(key - position  < 0)
                        {
                            let maxCount = key - position + alfabet.size
                            let controls = true
                            let counter = 0
                            let minCount = 0
                            let disc = new Map()
                            while (controls) {
                                if(maxCount > 0)
                                {
                                    results = `${results}${alfabet.get(maxCount)}`
                                    controls = false
                                }
                                else
                                {
                                    minCount += alfabet.size
                                    for(let [keys, values] of alfabet )
                                    {
                                        keys = keys + counter * alfabet.size
                                        disc.set(keys, values)
                                    }

                                    if(disc.get(maxCount + minCount) != undefined)
                                    {
                                        results = `${results}${disc.get(maxCount + minCount)}`
                                        controls = false
                                    }
                                }
                                counter += 1
                            }
                        }
                        else
                        {
                            results = `${results}${alfabet.get(key - position)}`
                        }
                    }
                }
            }
        }
        return {results}
    }

    // discionary
    const _disctionary = ()=>{
        const alfabet = new Map()
        const objs = [
            "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
            "1","2","3","4","5","6","7","8","9","0",
            "_","@","?","!","#","$","&",
            "£","€"
        ]

        objs.map((values, key)=>( alfabet.set(key, values) ))
        return alfabet
    }
   
    return {
        criptor,
        descriptor,
    }
}