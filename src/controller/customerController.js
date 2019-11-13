controller = {}

controller.list =  (req, res, next) => { 
    req.getConnection((err, connection)=> {
        if (err) { return next(err); } 
        connection.query('SELECT * FROM customer', (err, result)=>{
            if (err) {
                return next(err);
            } 
            res.render('index', { data : result})
        })
    })
}


controller.save =  (req, res, next) => {  
     const datos = req.body;
     req.getConnection((err, connection)=>{
        connection.query('INSERT INTO customer set ?',[datos], (err, customer)=>{
            res.redirect('/');
        })
     })
}


controller.editar =  (req, res, next) => {  
    const id = req.params.id;
    req.getConnection((err, connection)=>{
       connection.query('SELECT * FROM customer WHERE id=?',[id], (err, customer)=>{
           res.render('customers_edit.ejs',{data: customer} );
       })
    })
}

controller.update =  (req, res, next) => {  
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection((err, connection)=>{
       connection.query('UPDATE customer SET ? WHERE id=?',[newCustomer , id], (err, customer)=>{
           res.redirect('/');
       })
    })
}


controller.eliminar = (req,res,next)=>{
    const id = req.params.id
    req.getConnection((err, connection)=> {
            connection.query('DELETE FROM customer WHERE id= ?', id , (err, customer)=> {
            res.redirect('/')
        })
    })
}


module.exports = controller;