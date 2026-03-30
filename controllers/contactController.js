// Desc get all contacts
// route GET /api/contacts

const express = require("express");
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");

const getContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
});

const createContact = asyncHandler(async (req, res)=>{
    console.log("The request body is", req.body);
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are manadatory !");
    }
    const contact = await Contact.create({
        name, 
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
});

const getContacts = asyncHandler(async(req, res)=>{
    const contacts = await Contact.find({user_id:req.user.id});
    if(!contacts){
        res.status(400).json({message:"No contact found"})
    }
    res.status(200).json(contacts);
});

const updateContact = asyncHandler(async(req, res)=>{
   const contact = await Contact.findById(req.params.id);
   if(!contact){
    res.status(404);
    throw new Error("Contact not found")
   }

 const updateContact = await Contact.findByidUpdate(
    req.params.id,
    req.body,
    { new: true}
 );
    res.status(201).json(updateContact);
})


const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({
    message: "Contact deleted successfully",
  });
});

module.exports = { 
    getContact, 
    createContact, 
    getContacts, 
    deleteContact, 
    updateContact
};


