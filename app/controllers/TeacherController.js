const TeacherConrtoller={
    create(req,res){
        const body=req.body
        res.send({message:"success! New record created.",
            reqBody:body
        }) 
    },
    readAll(req,res){
        res.send({message:"success! record found.",
        })
    },

    readOne(req,res){
        res.send({message:"success! readone."
        });
    },
    update(req,res){
        res.send({message:"success! updated ."
        });
    },

    destroy(req,res){
        res.send({message:"success! destroy."
        });
    },
}
module.exports=TeacherConrtoller