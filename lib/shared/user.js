var EventEmitter = require( 'events' ).EventEmitter;
var debug = require( 'debug' )( 'groupchat:shared:user' );
function User ( id ) {
    this.id = id;
}

User.prototype.setName = function (name){
    this.name=name;
};

User.prototype = Object.create( EventEmitter.prototype );

User.s = Object.create( EventEmitter.prototype );

User.prototype.register = function(){
    User.s[ this.id ] = this.id;

    User.s[ this.id ].id = this.id;
    //console.log( 'registado user: ' + User.s[ this.id ] );
    User.s.emit( 'registered', this );
    this.emit( 'registered', this );
    console.log('length: ',Object.keys(User.s).length);
};

User.prototype.unregister = function(){
    delete User.s[ this.id ];
    User.s.emit( 'unregistered', this );
    this.emit( 'unregistered', this );
};

module.exports = User;
