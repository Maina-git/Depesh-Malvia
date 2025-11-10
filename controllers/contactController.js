// Desc get all contacts
// route GET /api/contacts
const express = require("express");

const getContacts = (req,res)=>{
    res.status(200).json({message:"Get all contacts"});
}

const createContact = (req, res)=>{
    console.log("The request is:", req.body);
 const {name, email, phone} = req.body;
if(!name || !email || !phone) {
    res.status(404);
    throw new Error("All fields are mandatory")
}
    res.status(201).json({message:"Create contacts"});
}

const getContact = (req, res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
};

const updateContact = (req, res)=>{
    res.status(201).json({message:"Update contact"});
}

const deleteContact = (req, res)=>{
    res.status(201).json({message:"Delete contact"});
}

module.exports = { 
    getContact, 
    createContact, 
    getContacts, 
    deleteContact, 
    updateContact
}


