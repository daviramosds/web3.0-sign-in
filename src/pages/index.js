import { useWeb3 } from "@3rdweb/hooks";
import React from "react";

import { Container, Button } from "../styles/index";

export default function Home() {
  const { address, chainId, connectWallet, disconnectWallet } = useWeb3();

  return (
    <Container>
      <div className="methods">
        <Button className="metamask" onClick={() => connectWallet("injected")}>
          Connect metamask
        </Button>

        <Button
          className="walletconnect"
          onClick={() => connectWallet("walletconnect")}
        >
          Connect Wallet Connect
        </Button>

        <Button
          className="coinbase"
          onClick={() => connectWallet("walletlink")}
        >
          Connect Coinbase Wallet
        </Button>
      </div>

      {address && (
        <div className="info">
          <p>
            <b>Address:</b> {address}
          </p>
          <p>
            <b>Chain Id:</b> {chainId}
          </p>

          <Button onClick={() => disconnectWallet()} className="disconnect">Disconnect</Button>
        </div>
      )}
    </Container>
  );
}
