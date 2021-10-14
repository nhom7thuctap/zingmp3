import './mainContentChart.scss';
import MainContentLineChart from '../../../Atoms/MainContentLineChart/MainContentLineChart';
import MainContentRanking from '../../../Atoms/MainContentRanking/MainContentRanking';
import MainContentChartCard from '../../../Atoms/MainContentChartCard/MainContentChartCard';

function MainContentChart() {
  return (
    <div className="chart">
      <div className="main-chart-wrapper">
        <div className="title">
          <h1>#zingchart </h1>
          <span>
            <i className="fas fa-play"></i>
          </span>
        </div>
        <div className="main-chart">
          <MainContentRanking />
          <MainContentLineChart />
        </div>
      </div>
      <div className="chart-card-list">
        <MainContentChartCard
          title="bài hát việt nam"
          img="https://images.unsplash.com/photo-1634063182122-932e8829181b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        />
        <MainContentChartCard
          title="us-uk"
          img="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        />
        <MainContentChartCard
          title="k-pop"
          img="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        />
      </div>
    </div>
  );
}

export default MainContentChart;
