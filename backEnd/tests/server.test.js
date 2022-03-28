import { expect } from 'chai'
import chai from 'chai';
import chaiHttp from 'chaiHttp';
let should = chai.should()

import server from '../server';
import User from '../Models/user.Schema';
import Peep from '../Models/peep.Schema';

import { testUsersData } from './testUserData.js';
import { testPeepsData } from './testPeepData.js';

chai.use(chaiHttp);

describe('Server Tests: USERS collection and data', () => {

    beforeEach(async () => {

        await User.deleteMany()
            .then(() => console.log("users collection cleared"))
            .catch(error => {
                console.log("Error clearing users collection");
                throw new Error();
            });

        await User.insertMany(testUsersData)
            .then(() => console.log("Test data inserted into users"))
            .catch(error => {
                console.log("Error inserting into users collection");
                throw new Error();
            });
    })

})

