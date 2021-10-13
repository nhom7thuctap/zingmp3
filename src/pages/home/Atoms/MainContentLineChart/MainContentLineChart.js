import { Line } from 'react-chartjs-2';

function MainContentLineChart() {
  const data = {
    labels: [
      '17:00',
      '19:00',
      '21:00',
      '23:00',
      '01:00',
      '03:00',
      '05:00',
      '07:00',
      '09:00',
      '11:00',
      '13:00',
      '15:00',
    ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 68, 66, 80, 91, 71, 80],
        fill: false,
        borderColor: 'rgb(85,136,208)',
        tension: 0.1,
      },
      {
        label: 'My 2nd Dataset',
        data: [60, 50, 70, 75, 50, 45, 45, 60, 77, 60, 68, 55],
        fill: false,
        borderColor: 'rgb(80,218,179)',
        tension: 0.1,
      },
      {
        label: 'My 3rd Dataset',
        data: [40, 44, 60, 55, 30, 41, 43, 53, 71, 56, 60, 51],
        fill: false,
        borderColor: 'rgb(196,49,95)',
        tension: 0.1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="line-chart">
      <Line data={data} width={750} height={280} options={options} />
    </div>
  );
}
export default MainContentLineChart;
