import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test-api.example.com');
  sleep(1);
}
    stage('Performance & Security Tests') {
      steps {
        sh 'k6 run k6/loadtest.js'
      }
    }
