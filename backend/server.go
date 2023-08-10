package main;

import (
	"github.com/gin-gonic/gin"
	//"gorm.io/gorm"
	//"github.com/lib/pq"
	"backend/database"
	"github.com/gin-contrib/cors"

  )

func main(){
	router := gin.Default()
	router.Use(cors.Default())

	

	router.GET("/hello", func(c *gin.Context) {
		c.String(200, "hello") 
		database.Connect()
	  })
	
	  router.Run()
}