"use client";

import React, { Component, useEffect, useState } from "react";
import Peer from "peerjs";
import NoSSR from "@/components/NoSSR";

function Chat() {
  const [myId, setMyId] = useState("");
  const [friendId, setFriendId] = useState("");
  const [peer, setPeer] = useState({} as Peer);
  const [mesType, setMesType] = useState(0);
  const [message, setMessage] = useState<string>("");
  const [messageFile, setMessageFile] = useState<File | ArrayBuffer>();
  const [messages, setMessages] = useState<
    {
      sender: string;
      message: {
        type: number;
        content: any;
        // content: string | File | ArrayBuffer;
      };
    }[]
  >([]);

  useEffect(() => {
    setMessageFile(new File([], ""));
  }, []);

  // const [testMes, setTestMes] = useState<{ sender: string; message: File }[]>(
  //   []
  // );

  function init() {
    const peer = new Peer("");
    peer.on("open", (id) => {
      setMyId(id);
      setPeer(peer);
    });
    peer.on("connection", (conn) => {
      conn.on("data", (data: any) => {
        setMessages([...messages, data]);
        // console.log(data);
        // setTestMes([...testMes, data]);
      });
    });
  }
  // init();

  const send = () => {
    const conn = peer.connect(friendId);

    conn.on("open", () => {
      const msgObj = {
        sender: myId,
        message:
          mesType === 0
            ? {
                type: 0,
                content: message,
              }
            : { type: 1, content: messageFile },
      };

      conn.send(msgObj);

      setMessages([...messages, msgObj]);
      setMesType(0);
      setMessage("");
      setMessageFile(new File([], ""));
    });
  };

  // const sendTest = () => {
  //   const conn = peer.connect(friendId);
  //   conn.on("open", () => {
  //     const msgObj = {
  //       sender: myId,
  //       message: testF,
  //     };
  //     conn.send(msgObj);
  //     setTestMes([...testMes, msgObj]);
  //     setTestF(new File([], ""));
  //   });
  // };

  return (
    <NoSSR>
      <h1>chat</h1>
      <button className="btn" onClick={init}>
        Init
      </button>
      <div className="col">
        <h1>My ID: {myId}</h1>

        <label>Friend ID:</label>
        <input
          type="text"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
          className="input w-full max-w-xs"
        />

        <br />
        <br />

        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMesType(0);
            setMessage(e.target.value);
          }}
          className="input w-full max-w-xs"
        />
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              const file = e.target.files[0];
              setMesType(1);
              setMessageFile(file);
            }
          }}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button onClick={send}>Send</button>

        {/* <button onClick={sendTest}>Send Test</button> */}

        {messages.map((message, i) => {
          let fu;
          if (message.message.type === 1) {
            fu = URL.createObjectURL(
              new Blob([message.message.content as unknown as ArrayBuffer], {
                type: "arraybuffer",
              })
            );
          }
          return (
            <div key={i}>
              <h3>
                {message.sender}:({message.message.type})
              </h3>
              <p>
                {message.message.type === 0 &&
                typeof message.message.content === "string"
                  ? message.message.content
                  : fu}
              </p>
            </div>
          );
        })}
        {/* {testMes.map((message, i) => {
          console.log(message);
          const fu = URL.createObjectURL(
            new Blob([message.message as unknown as ArrayBuffer], {
              type: "arraybuffer",
            })
          );
          return (
            <div key={i}>
              <h3>{message.sender}:</h3>
              <p>
                {message.message.name}:{fu}
              </p>
            </div>
          );
        })} */}
      </div>
    </NoSSR>
  );
}

export default Chat;
