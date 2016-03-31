import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save1() {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        image: this.get('image'),
        blog: this.get('blog')
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
