import bcrypt from 'bcryptjs';


const data = {
    users:[
        {
            _id : 1 ,
            name:'Syed Muhammad Ashar Saghir',
            email:'saghirashar@gmail.com',
            password:bcrypt.hashSync('123456'),
            profilePic:'https://www.upwork.com/profile-portraits/c1dJKzCV06N8it8NMd6i1cFr4DMKXHAB4DKL9I2uJtEVVtRVvx3J9gPA7hTkbo9HLp'
        },
        {
            _id : 2 ,
            name:'Syed Muhammad Ashar 2',
            email:'saghirashar2@gmail.com',
            password:bcrypt.hashSync('123456'),
            profilePic:'https://www.upwork.com/profile-portraits/c1dJKzCV06N8it8NMd6i1cFr4DMKXHAB4DKL9I2uJtEVVtRVvx3J9gPA7hTkbo9HLp'
        },
    ] ,



    collection:[
        {
            a:'this is some collection',
            b:'this is another collection',
        },
    ],







    films : [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { label: 'Goodfellas', year: 1990 },
        { label: 'The Matrix', year: 1999 },
        { label: 'Seven Samurai', year: 1954 },
        { label: 'City of God', year: 2002 },
        { label: 'Se7en', year: 1995 },
        { label: 'The Silence of the Lambs', year: 1991 },
        { label: "It's a Wonderful Life", year: 1946 },
      ],



}

export default data ;