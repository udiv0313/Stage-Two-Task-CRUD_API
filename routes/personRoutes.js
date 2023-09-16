import express from 'express';
import { body, param, query } from 'express-validator';
import * as personController from '../controllers/personController.js';

const personRoutes = express.Router();

// Show all the Person
personRoutes.get('/', personController.getAllPerson)

// Create a new person
personRoutes.post('/', personController.createPerson);

// Fetch details of a person by ID
personRoutes.get('/:id', personController.getPersonById);

// Fetch details of a person by name
personRoutes.get('/', [
    query('name').isString().notEmpty(),
], personController.getPersonByName);

// Update details of an existing person by ID
personRoutes.put('/:id', personController.updatePerson);

// Remove a person by ID
personRoutes.delete('/:id', personController.deletePerson);

export default personRoutes;
