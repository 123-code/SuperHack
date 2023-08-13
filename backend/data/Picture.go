package data

import (
	"time"

	"github.com/google/uuid"
)

type PostPicture struct {
	ID        uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Name      string    
	Photo     string
	PhotoBlob []byte

	// Add more fields
	CreatedAt time.Time
	UpdatedAt time.Time

	// References
	PostID uuid.UUID // Foreign key to Post model

	// Metadata
	ContentType string
	Size        int64
}

// TableName overrides default tablename
func (PostPicture) TableName() string {
	return "post_pictures" 
}