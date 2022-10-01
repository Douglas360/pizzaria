BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[category] (
    [id_category] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [category_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 CONSTRAINT [category_updated_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [category_pkey] PRIMARY KEY CLUSTERED ([id_category])
);

-- CreateTable
CREATE TABLE [dbo].[product] (
    [id_product] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [price] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [banner] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [product_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 CONSTRAINT [product_updated_at_df] DEFAULT CURRENT_TIMESTAMP,
    [id_category] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [product_pkey] PRIMARY KEY CLUSTERED ([id_product])
);

-- CreateTable
CREATE TABLE [dbo].[order] (
    [id_order] NVARCHAR(1000) NOT NULL,
    [table] INT NOT NULL,
    [status] BIT NOT NULL CONSTRAINT [order_status_df] DEFAULT 0,
    [draft] BIT NOT NULL CONSTRAINT [order_draft_df] DEFAULT 1,
    [name] NVARCHAR(1000),
    [created_at] DATETIME2 CONSTRAINT [order_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 CONSTRAINT [order_updated_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [order_pkey] PRIMARY KEY CLUSTERED ([id_order])
);

-- CreateTable
CREATE TABLE [dbo].[item] (
    [id_item] NVARCHAR(1000) NOT NULL,
    [amount] INT NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [item_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 CONSTRAINT [item_updated_at_df] DEFAULT CURRENT_TIMESTAMP,
    [id_order] NVARCHAR(1000) NOT NULL,
    [id_product] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [item_pkey] PRIMARY KEY CLUSTERED ([id_item])
);

-- AddForeignKey
ALTER TABLE [dbo].[product] ADD CONSTRAINT [product_id_category_fkey] FOREIGN KEY ([id_category]) REFERENCES [dbo].[category]([id_category]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[item] ADD CONSTRAINT [item_id_order_fkey] FOREIGN KEY ([id_order]) REFERENCES [dbo].[order]([id_order]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[item] ADD CONSTRAINT [item_id_product_fkey] FOREIGN KEY ([id_product]) REFERENCES [dbo].[product]([id_product]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
