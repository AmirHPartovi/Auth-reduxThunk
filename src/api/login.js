export const Login = (userName , passWord)=>{
    return new Promise((resolve,reject)=>{
        if (userName==='amir' && passWord==='123456'){
            setTimeout(()=>{
                resolve({
                    name:'amir',
                    age:24,
                    country:'iran'
                })
            },5000)
            
        }else{
            reject('invalid Username or Password')
        }
    })
}