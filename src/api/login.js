export const Login = (userName , passWord)=>{
    return new Promise((resolve,reject)=>{
        if (userName==='amir' && passWord==='123456'){
            resolve({
                name:'amir',
                age:24,
                country:'iran'
            })
        }else{
            reject('invalid Username or Password')
        }
    })
}