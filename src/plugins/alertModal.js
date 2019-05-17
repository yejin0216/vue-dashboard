/**
 * @name alertModal.js
 * @author 김예진
 * @description 사용자 Action에 대한 응답 메시지를 출력한다.
 */
import AlertModalTemplate from '../components/AlertModalTemplate.vue';

const alertModal = {
  install: (Vue) => {
    const ModalConstructor = Vue.extend(AlertModalTemplate);
    let modalInstance = null;

    window.AlertModal = () => {
      /* empty */
    };

    window.AlertModal.show = (info, title, message) => {
      if (modalInstance) {
        modalInstance.dialog = true;
        modalInstance.info = info;
        modalInstance.title = title;
        modalInstance.message = message;
        return;
      }
      modalInstance = new ModalConstructor({
        el: document.createElement('template'),
        data() {
          return {
            info,
            title,
            message,
          };
        },
      });
      modalInstance.dialog = true;
      document.body.appendChild(modalInstance.$el);
    };

    window.AlertModal.close = () => {
      if (modalInstance) {
        modalInstance.dialog = false;
      }
    };
  },
};

export default alertModal;
