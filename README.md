For the program to successfully read your MySQL database:

Create dbConfig.js in JensenWebAppSPA/webAPI/components

Add the following:

module.exports = {
    host: ">>YOUR HOSTNAME<<",
    user: ">>YOUR DATABASE USERNAME<<",
    password: ">>YOUR DATABASE PASSWORD<<",
    database: ">>YOUR DATABASE NAME<<"
};

Example:

module.exports = {
    host: "localhost",
    user: "root",
    password: "Password123!",
    database: "newsextractdb"
};
