  // import proess    const abc=require("")

const getEmployee = async (req, res, next) => {
    try {
       // if (req.user.role == "Admin") {
            res.status(200).json("hello Admin from Get method");
       // }
    } catch (e) {
        next(e);
    }
}


module.exports= {getEmployee};