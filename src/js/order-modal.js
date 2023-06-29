(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-order-modal]'),
    closeModalBtn: document.querySelector('[data-close-order-modal]'),
    hideModal: document.querySelector('[data-hide-order-modal]'),
    modal: document.querySelector('[data-order-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.hideModal.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
