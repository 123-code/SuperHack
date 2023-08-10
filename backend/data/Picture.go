package data

import (
  "github.com/google/uuid"
  "gorm.io/gorm"
)


type PostPicture struct {
	ID uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	
	Photo string 
	PhotoBlob []byte
  }

