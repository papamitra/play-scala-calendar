package controllers

import play._
import play.mvc._

object Application extends Controller {
  
  import views.Application._
    
  def index = {
    html.index("Your Scala application is ready!")
  }    
}

object Events extends Controller {
  import com.google.gson.Gson
  import scala.collection.JavaConversions._

  def index = {
    val gson = new Gson
    val map = Map("title"->"event1", "start"->"2011-08-10")
    val jmap:java.util.Map[String,String] = map
    Json(gson.toJson(Array(jmap)))
//    Json("""[{"title":"event1","start":"2011-08-10"}]""")
  }

  
}
