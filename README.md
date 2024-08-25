For the program to successfully read your MySQL database:

Create dbConfig.js in JensenWebAppSPA/webAPI/components

Add the following:


module.exports = { \
&nbsp;&nbsp;&nbsp;&nbsp;host: ">>YOUR HOSTNAME<<",\
&nbsp;&nbsp;&nbsp;&nbsp;user: ">>YOUR DATABASE USERNAME<<",\
&nbsp;&nbsp;&nbsp;&nbsp;password: ">>YOUR DATABASE PASSWORD<<",\
&nbsp;&nbsp;&nbsp;&nbsp;database: ">>YOUR DATABASE NAME<<"\
};

Example:

module.exports = {\
&nbsp;&nbsp;&nbsp;&nbsp;host: "localhost",\
&nbsp;&nbsp;&nbsp;&nbsp;user: "root",\
&nbsp;&nbsp;&nbsp;&nbsp;password: "Password123!",\
&nbsp;&nbsp;&nbsp;&nbsp;database: "newsextractdb"\
};
