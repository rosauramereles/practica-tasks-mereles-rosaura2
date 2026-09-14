//Estrucutra base de los controladores 
export const createUser = async (req,res) => {
 try {
 } catch (error) {
    //este console es para ver el error en la consola del servidor que seria del lado del programador 
    console.log("Error")
 //con este mensaje se le responde al cliente 
    return res.status(500).json({message: "Error interno del servidor"})
 }
};

export const getAllUsers = async (req,res) => {
 try {
 } catch (error) {
    console.log("Error")
    return res.status(500).json({message: "Error interno del servidor"})
 }
};

export const getUserById = async (req,res) => {
 try {
 } catch (error) {
    console.log("Error")
    return res.status(500).json({message: "Error interno del servidor"})
 }
};

export const updateUser = async (req,res) => {
 try {
 } catch (error) {
    console.log("Error")
    return res.status(500).json({message: "Error interno del servidor"})
 }
};

export const deleteUser = async (req,res) => {
 try {
 } catch (error) { 
    console.log("Error")
    return res.status(500).json({message: "Error interno del servidor"})
 }
};
