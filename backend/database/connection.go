package database

import (
	
	"log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"backend/data"
	
	//"os"
  )

  var DBconn *gorm.DB

  func DBconnect(){
	var err error;

	dsn := "host=mahmud.db.elephantsql.com user=dcdgubry password=gpmuDY2lu01owW7RBHBIh3sq1TDkbBL6 dbname=dcdgubry port=5432 sslmode=disable"
	DBconn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	DBconn.AutoMigrate(&data.PostPicture{})
 
if err != nil{ 
	log.Fatal("Failded to connect to database")
}

}