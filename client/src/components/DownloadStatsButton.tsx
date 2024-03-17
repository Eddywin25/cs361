import axios from 'axios';

const DownloadStatsButton = () => {
  const getDownload = async () => {
    try {
      const response = await axios.get('http://localhost:5000/download-game-stats?player-id=1', {
        responseType: 'blob',
      });

      // create temporary URL for downloaded file
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // download the csv from temporary link
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'player_stats.csv');
      document.body.appendChild(link);
      link.click();

      // remove temporary link and URL
      link.remove();
      window.URL.revokeObjectURL(url);
    }
    catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <button onClick={getDownload}>Download Player Stats</button>
  );
};

export default DownloadStatsButton;