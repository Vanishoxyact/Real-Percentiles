import axios from 'axios'

const API_URL = '/wl_api'
const REPORT_API_URL = `${API_URL}/report`

class WarcraftLogsService {

   readReport(reportId) {
      return axios.get(REPORT_API_URL, {
         params: {
            reportId: reportId
         }
      });
   }

}

export default new WarcraftLogsService()