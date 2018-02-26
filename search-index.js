var searchIndex = {};
searchIndex["socket2"] = {"doc":"Utilities for handling sockets","items":[[3,"Socket","socket2","Newtype, owned, wrapper around a system socket.",null,null],[3,"SockAddr","","The address of a socket.",null,null],[3,"Domain","","Specification of the communication domain for a socket.",null,null],[3,"Type","","Specification of communication semantics on a socket.",null,null],[3,"Protocol","","Protocol specification used for creating sockets via `Socket::new`.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_parts","","Constructs a `SockAddr` from its raw components.",0,null],[11,"unix","","Constructs a `SockAddr` with the family `AF_UNIX` and the provided path.",0,{"inputs":[{"name":"p"}],"output":{"generics":["sockaddr"],"name":"result"}}],[11,"as_inet","","Returns this address as a `SocketAddrV4` if it is in the `AF_INET` family.",0,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddrv4"],"name":"option"}}],[11,"as_inet6","","Returns this address as a `SocketAddrV4` if it is in the `AF_INET6` family.",0,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddrv6"],"name":"option"}}],[11,"family","","Returns this address's family.",0,{"inputs":[{"name":"self"}],"output":{"name":"sa_family_t"}}],[11,"len","","Returns the size of this address in bytes.",0,{"inputs":[{"name":"self"}],"output":{"name":"socklen_t"}}],[11,"as_ptr","","Returns a raw pointer to the address.",0,null],[11,"from","","",0,{"inputs":[{"name":"socketaddrv4"}],"output":{"name":"sockaddr"}}],[11,"from","","",0,{"inputs":[{"name":"socketaddrv6"}],"output":{"name":"sockaddr"}}],[11,"from","","",0,{"inputs":[{"name":"socketaddr"}],"output":{"name":"sockaddr"}}],[11,"new","","Creates a new socket ready to be configured.",1,{"inputs":[{"name":"domain"},{"name":"type"},{"generics":["protocol"],"name":"option"}],"output":{"generics":["socket"],"name":"result"}}],[11,"pair","","Creates a pair of sockets which are connected to each other.",1,{"inputs":[{"name":"domain"},{"name":"type"},{"generics":["protocol"],"name":"option"}],"output":{"name":"result"}}],[11,"into_tcp_stream","","Consumes this `Socket`, converting it to a `TcpStream`.",1,{"inputs":[{"name":"self"}],"output":{"name":"tcpstream"}}],[11,"into_tcp_listener","","Consumes this `Socket`, converting it to a `TcpListener`.",1,{"inputs":[{"name":"self"}],"output":{"name":"tcplistener"}}],[11,"into_udp_socket","","Consumes this `Socket`, converting it to a `UdpSocket`.",1,{"inputs":[{"name":"self"}],"output":{"name":"udpsocket"}}],[11,"into_unix_stream","","Consumes this `Socket`, converting it into a `UnixStream`.",1,{"inputs":[{"name":"self"}],"output":{"name":"unixstream"}}],[11,"into_unix_listener","","Consumes this `Socket`, converting it into a `UnixListener`.",1,{"inputs":[{"name":"self"}],"output":{"name":"unixlistener"}}],[11,"into_unix_datagram","","Consumes this `Socket`, converting it into a `UnixDatagram`.",1,{"inputs":[{"name":"self"}],"output":{"name":"unixdatagram"}}],[11,"connect","","Initiate a connection on this socket to the specified address.",1,{"inputs":[{"name":"self"},{"name":"sockaddr"}],"output":{"name":"result"}}],[11,"connect_timeout","","Initiate a connection on this socket to the specified address, only only waiting for a certain period of time for the connection to be established.",1,{"inputs":[{"name":"self"},{"name":"sockaddr"},{"name":"duration"}],"output":{"name":"result"}}],[11,"bind","","Binds this socket to the specified address.",1,{"inputs":[{"name":"self"},{"name":"sockaddr"}],"output":{"name":"result"}}],[11,"listen","","Mark a socket as ready to accept incoming connection requests using accept()",1,{"inputs":[{"name":"self"},{"name":"i32"}],"output":{"name":"result"}}],[11,"accept","","Accept a new incoming connection from this listener.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this TCP connection.",1,{"inputs":[{"name":"self"}],"output":{"generics":["sockaddr"],"name":"result"}}],[11,"peer_addr","","Returns the socket address of the remote peer of this TCP connection.",1,{"inputs":[{"name":"self"}],"output":{"generics":["sockaddr"],"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["socket"],"name":"result"}}],[11,"take_error","","Get the value of the `SO_ERROR` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"set_nonblocking","","Moves this TCP stream into or out of nonblocking mode.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"shutdown","","Shuts down the read, write, or both halves of this connection.",1,{"inputs":[{"name":"self"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"recv","","Receives data on the socket from the remote address to which it is connected.",1,null],[11,"peek","","Receives data on the socket from the remote adress to which it is connected, without removing that data from the queue. On success, returns the number of bytes peeked.",1,null],[11,"recv_from","","Receives data from the socket. On success, returns the number of bytes read and the address from whence the data came.",1,null],[11,"peek_from","","Receives data from the socket, without removing it from the queue.",1,null],[11,"send","","Sends data on the socket to a connected peer.",1,null],[11,"send_to","","Sends data on the socket to the given address. On success, returns the number of bytes written.",1,null],[11,"ttl","","Gets the value of the `IP_TTL` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[11,"set_ttl","","Sets the value for the `IP_TTL` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"only_v6","","Gets the value of the `IPV6_V6ONLY` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"set_only_v6","","Sets the value for the `IPV6_V6ONLY` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"read_timeout","","Returns the read timeout of this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"set_read_timeout","","Sets the read timeout to the timeout specified.",1,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[11,"write_timeout","","Returns the write timeout of this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"set_write_timeout","","Sets the write timeout to the timeout specified.",1,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[11,"nodelay","","Gets the value of the `TCP_NODELAY` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"set_nodelay","","Sets the value of the `TCP_NODELAY` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"broadcast","","Sets the value of the `SO_BROADCAST` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"set_broadcast","","Gets the value of the `SO_BROADCAST` option for this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_loop_v4","","Gets the value of the `IP_MULTICAST_LOOP` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"set_multicast_loop_v4","","Sets the value of the `IP_MULTICAST_LOOP` option for this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"multicast_ttl_v4","","Gets the value of the `IP_MULTICAST_TTL` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"result"}}],[11,"set_multicast_ttl_v4","","Sets the value of the `IP_MULTICAST_TTL` option for this socket.",1,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"result"}}],[11,"multicast_loop_v6","","Gets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"set_multicast_loop_v6","","Sets the value of the `IPV6_MULTICAST_LOOP` option for this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"join_multicast_v4","","Executes an operation of the `IP_ADD_MEMBERSHIP` type.",1,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"join_multicast_v6","","Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",1,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"leave_multicast_v4","","Executes an operation of the `IP_DROP_MEMBERSHIP` type.",1,{"inputs":[{"name":"self"},{"name":"ipv4addr"},{"name":"ipv4addr"}],"output":{"name":"result"}}],[11,"leave_multicast_v6","","Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",1,{"inputs":[{"name":"self"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"result"}}],[11,"linger","","Reads the linger duration for this socket by getting the SO_LINGER option",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"set_linger","","Sets the linger duration of this socket by setting the SO_LINGER option",1,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[11,"reuse_address","","Check the `SO_REUSEADDR` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"set_reuse_address","","Set value for the `SO_REUSEADDR` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"recv_buffer_size","","Gets the value of the `SO_RCVBUF` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"result"}}],[11,"set_recv_buffer_size","","Sets the value of the `SO_RCVBUF` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"send_buffer_size","","Gets the value of the `SO_SNDBUF` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"result"}}],[11,"set_send_buffer_size","","Sets the value of the `SO_SNDBUF` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"result"}}],[11,"keepalive","","Returns whether keepalive messages are enabled on this socket, and if so the duration of time between them.",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"set_keepalive","","Sets whether keepalive messages are enabled to be sent on this socket.",1,{"inputs":[{"name":"self"},{"generics":["duration"],"name":"option"}],"output":{"name":"result"}}],[11,"reuse_port","","Check the value of the `SO_REUSEPORT` option on this socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["bool"],"name":"result"}}],[11,"set_reuse_port","","Set value for the `SO_REUSEPORT` option on this socket.",1,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"result"}}],[11,"read","","",1,null],[11,"write","","",1,null],[11,"flush","","",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",1,{"inputs":[{"name":"tcpstream"}],"output":{"name":"socket"}}],[11,"from","","",1,{"inputs":[{"name":"tcplistener"}],"output":{"name":"socket"}}],[11,"from","","",1,{"inputs":[{"name":"udpsocket"}],"output":{"name":"socket"}}],[11,"from","","",1,{"inputs":[{"name":"unixstream"}],"output":{"name":"socket"}}],[11,"from","","",1,{"inputs":[{"name":"unixlistener"}],"output":{"name":"socket"}}],[11,"from","","",1,{"inputs":[{"name":"unixdatagram"}],"output":{"name":"socket"}}],[11,"ipv4","","Domain for IPv4 communication, corresponding to `AF_INET`.",2,{"inputs":[],"output":{"name":"domain"}}],[11,"ipv6","","Domain for IPv6 communication, corresponding to `AF_INET6`.",2,{"inputs":[],"output":{"name":"domain"}}],[11,"unix","","Domain for Unix socket communication, corresponding to `AF_UNIX`.",2,{"inputs":[],"output":{"name":"domain"}}],[11,"from","","",2,{"inputs":[{"name":"i32"}],"output":{"name":"domain"}}],[11,"stream","","Type corresponding to `SOCK_STREAM`",3,{"inputs":[],"output":{"name":"type"}}],[11,"dgram","","Type corresponding to `SOCK_DGRAM`",3,{"inputs":[],"output":{"name":"type"}}],[11,"seqpacket","","Type corresponding to `SOCK_SEQPACKET`",3,{"inputs":[],"output":{"name":"type"}}],[11,"raw","","Type corresponding to `SOCK_RAW`",3,{"inputs":[],"output":{"name":"type"}}],[11,"icmpv4","","Protocol corresponding to `ICMPv4`",4,{"inputs":[],"output":{"name":"self"}}],[11,"icmpv6","","Protocol corresponding to `ICMPv6`",4,{"inputs":[],"output":{"name":"self"}}],[11,"tcp","","Protocol corresponding to `TCP`",4,{"inputs":[],"output":{"name":"self"}}],[11,"udp","","Protocol corresponding to `UDP`",4,{"inputs":[],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"i32"}],"output":{"name":"type"}}],[11,"from","","",4,{"inputs":[{"name":"i32"}],"output":{"name":"protocol"}}],[11,"as_raw_fd","","",1,{"inputs":[{"name":"self"}],"output":{"name":"c_int"}}],[11,"into_raw_fd","","",1,{"inputs":[{"name":"self"}],"output":{"name":"c_int"}}],[11,"from_raw_fd","","",1,{"inputs":[{"name":"c_int"}],"output":{"name":"socket"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"domain"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"type"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"protocol"}}]],"paths":[[3,"SockAddr"],[3,"Socket"],[3,"Domain"],[3,"Type"],[3,"Protocol"]]};
initSearch(searchIndex);
