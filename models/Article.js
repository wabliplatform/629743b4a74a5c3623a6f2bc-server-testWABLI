
const { ArticleArticleImageSchema } =require('./ArticleArticleImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
Underscoreid:String , 


articleImage:  
ArticleArticleImageSchema
 , 


articleTitle:String , 


articleDate:Date , 


articlePost:String 



})

module.exports = {
  Article : mongoose.model('article', articleSchema),
}

