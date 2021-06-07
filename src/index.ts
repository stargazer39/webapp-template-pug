import express from "express";
import path from "path";
const app = express();
const port = 8080; // default port to listen

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "pug" );

// add assets folder
app.use(express.static(path.join(__dirname, "public")));
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index",{
        title : "Hi",
        extra : "Hopfully this will work",
        functions : [{
            name : "Link to youtube",
            path : "/link2yt"
        },{
            name : "Stream to youtube",
            path : "/stream2yt"
        }]
    });
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );