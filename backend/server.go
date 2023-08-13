package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"backend/data"
	"backend/util"
)

func main() {
	router := gin.Default()
	router.Use(cors.Default())

	router.GET("/hello", func(c *gin.Context) {
		c.String(200, "hello")
	})

	router.POST("/uploadPicture", func(c *gin.Context) {
		var picture data.PostPicture
		if err := c.ShouldBindJSON(&picture); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}
		
		if err := util.UploadPicture(picture); err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}
		
		c.JSON(200, gin.H{"message": "Picture uploaded successfully!"})
	})

	router.Run()
}