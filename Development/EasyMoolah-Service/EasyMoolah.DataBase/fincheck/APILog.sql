CREATE TABLE [fincheck].[APILog](
	[Key] [int] IDENTITY(1,1) NOT NULL,
	[Id] [int] NOT NULL,
	[SessionId] [int] NULL,
	[Token] [varchar](50) NULL,
	[Method] [varchar](50) NULL,
	[Http] [varchar](50) NULL,
	[Endpoint] [varchar](250) NULL,
	[Request] [varchar](max) NULL,
	[Response] [varchar](max) NULL,
	[StartTimeStamp] [datetime] NULL,
	[EndTimeStamp] [datetime] NOT NULL,
 CONSTRAINT [PK_APILog] PRIMARY KEY CLUSTERED 
(
	[Key] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

