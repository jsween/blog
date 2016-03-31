import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        image: this.get('image'),
        blog: this.get('blog')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
