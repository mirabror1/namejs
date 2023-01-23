let userData =[
    {
      name:'Azamat'
    },
    {
      name:'Abror'
    },
    {
      name:'Aziz'
    },  
    {
      name:'Sardor'
    },
    {
        name:'Bobir'
    },
    {
        name:'Sanjar'
    },
    {
        name:'Nodir'
    },
    {
        name:'Diyor'
    },
    {
        name:'Johongir'
    },
    {
        name:'Asad'
    }
  ]
  function getUserLength(users){
    for(let i=0; i<users.length; i++){
        if(users[i].name.length > 5){
            console.log(users[i].name , ' 5dan katta')
        }
        else{
            console.log(users[i].name , ' 5dan kichik')
        }
    }
  }
  getUserLength(userData)