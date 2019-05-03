/**
 * formatters mixin
 * @author yejin kim
 */

/**
 * 센서타입코드를 센서타입명으로 변환한다.
 * @param code 센서타입코드
 */
export default {
  methods: {
    getSensorType(code) {
      if (code === '0000010' || code === '1000') {
        return '수집';
      } if (code === '0000020' || code === '3000') {
        return '제어';
      }
      return 'not available sensor type';
    },
  },
};
