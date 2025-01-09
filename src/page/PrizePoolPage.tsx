import { useEffect, useState } from "react";
import styled from "styled-components";
import LotteryGIF from "../assets/lottery.gif";
import { Link } from "react-router-dom";
import { ContractBalance } from "../abi/abiFunctions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  align-items: flex-start;
  max-width: 450px;
`;

const RulesSection = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const PrizePoolPage = () => {
  const [totalPrize, setTotalPrize] = useState("");

  useEffect(() => {
    const getContractBalance = async () => {
      const tmp = await ContractBalance();
      setTotalPrize(tmp);
    };
    getContractBalance();
  }, []);
  return (
    <Container>
      <img src={LotteryGIF} alt="prize pool" width={250} />
      <h3>累積獎金：{totalPrize} tBNB</h3>
      <RulesSection>
        <li>1. 該遊戲是基於 Binance testnet 所開發的去中心化金融應用。</li>
        <li>
          2. 玩家可透過{" "}
          <Link to="https://www.bnbchain.org/en/testnet-faucet" target="_blank">
            Binance faucets
          </Link>{" "}
          取得測試用遊戲代幣(tBNB)。
        </li>
        <li>3. 測試代幣可用於購買彩券、參與抽獎，或投資獎金池。</li>
        <li>4. 彩券獎金、投資利潤，將透過智能合約發放至玩家錢包。</li>
      </RulesSection>
    </Container>
  );
};

export default PrizePoolPage;
