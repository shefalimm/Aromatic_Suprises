userRoute.route('/login/:email/:password').get((req, res, next) => {
    var e=req.params.email;
    var p=req.params.password;
     
    
    registers.find(
            {
                  'email':e,
                  'password':p
                
            }
            , (error, data) => {
      if (error) {
        return next(error);
      } else {
          console.log(data.length);
        res.json(data.length);
      }
    })
 
    
  });