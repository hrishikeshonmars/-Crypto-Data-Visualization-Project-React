import React, { Component } from 'react';
import CardSection from './components/CardSection'; 
import Header from './components/Header';
import ChartSection from './components/ChartSection';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "bitcoin",
      data: {} 
    }
  }

  fetchData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.state.id}&x_cg_demo_api_key=CG-QPNQ1rFs9TF1WXxfn9nZ7SHa`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      this.setState({ data: jsonData[0] });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleSubmit = async (event) => {
    const selectedId = event.target.value;
    await this.setState({ id: selectedId });
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <Header handle_submit={this.handleSubmit} />
        <CardSection
          coinName={this.state.data.name}
          CurrentPrice={this.state.data.current_price}
          MarketCapRank={this.state.data.market_cap_rank}
          AllTimeHigh={this.state.data.ath}
          AllTimeLow={this.state.data.atl}
          MarketCap={this.state.data.market_cap}
          High24={this.state.data.high_24h}
          Low24={this.state.data.low_24h}
        />
        <ChartSection id={this.state.id}/>
      </div>
    );
  }
}
