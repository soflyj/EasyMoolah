using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EasyMoolah.Repository.Models
{
    public partial class EMDevContext : DbContext
    {
        public EMDevContext()
        {
        }

        public EMDevContext(DbContextOptions<EMDevContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AuditBorrowerApplicationLog> AuditBorrowerApplicationLog { get; set; }
        public virtual DbSet<AuditBorrowerSession> AuditBorrowerSession { get; set; }
        public virtual DbSet<LkpService> LkpService { get; set; }
        public virtual DbSet<TblBorrower> TblBorrower { get; set; }
        public virtual DbSet<TblBorrowerAddress> TblBorrowerAddress { get; set; }
        public virtual DbSet<TblBorrowerApplication> TblBorrowerApplication { get; set; }
        public virtual DbSet<TblFspresult> TblFspresult { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.;Database=EM-Dev;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AuditBorrowerApplicationLog>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("audit_BorrowerApplicationLog");

                entity.Property(e => e.Key).ValueGeneratedNever();

                entity.Property(e => e.StageName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TimeStamp).HasColumnType("datetime");

                entity.Property(e => e.Xml)
                    .HasColumnName("XML")
                    .HasColumnType("xml");
            });

            modelBuilder.Entity<AuditBorrowerSession>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("audit_BorrowerSession");

                entity.Property(e => e.Key).ValueGeneratedNever();

                entity.Property(e => e.EndTime)
                    .HasColumnName("endTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Ipaddress)
                    .HasColumnName("IPAddress")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SessionGuid).HasColumnName("SessionGUID");

                entity.Property(e => e.StartTime)
                    .HasColumnName("startTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Xml)
                    .HasColumnName("XML")
                    .HasColumnType("xml");
            });

            modelBuilder.Entity<LkpService>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("lkp_Service");

                entity.Property(e => e.ChangedDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive).HasMaxLength(10);

                entity.Property(e => e.Name)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblBorrower>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("tbl_Borrower");

                entity.Property(e => e.ChangedDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IdNumber)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive).HasMaxLength(10);

                entity.Property(e => e.LandlineNumber)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblBorrowerAddress>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("tbl_BorrowerAddress");

                entity.Property(e => e.ChangedDate).HasColumnType("datetime");

                entity.Property(e => e.City)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.FullAdress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive).HasMaxLength(10);

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Suburb)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblBorrowerApplication>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("tbl_BorrowerApplication");

                entity.Property(e => e.BankingWith)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChangedDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive).HasMaxLength(10);
            });

            modelBuilder.Entity<TblFspresult>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("tbl_FSPResult");

                entity.Property(e => e.Key).ValueGeneratedNever();

                entity.Property(e => e.ChangedDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.IsActive).HasMaxLength(10);

                entity.Property(e => e.Provider)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.TermPeriod)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
