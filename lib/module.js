const Cookies = require('cookies');
const PHPUnserialize = require('php-unserialize');

module.exports = (req, res, next) => {
    const cookies = new Cookies( request, null );
    const sessionId = cookies.get( 'PHPSESSID' );
    // read the session data from the database, file or cache
    const data = readSessionData( sessionId );
    // deserialize session data
    const session = PHPUnserialize.unserializeSession( data );

    req.session = session;
}