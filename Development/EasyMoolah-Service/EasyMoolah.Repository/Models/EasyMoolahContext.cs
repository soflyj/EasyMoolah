using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using EasyMoolah.Model.Database.Fincheck;

namespace EasyMoolah.Repository.Models
{
    public partial class EasyMoolahContext : DbContext
    {
        public EasyMoolahContext()
        {
        }

        public EasyMoolahContext(DbContextOptions<EasyMoolahContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Accept> Accept { get; set; }
        public virtual DbSet<Apilog> Apilog { get; set; }     
        public virtual DbSet<Lead> Lead { get; set; }
        public virtual DbSet<Offer> Offer { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-6MIARM2\\SQLEXPRESS;Database=EasyMoolah;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.1-servicing-10028");

            modelBuilder.Entity<Accept>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("Accept", "fincheck");

                entity.Property(e => e.Code)
                    .HasColumnName("code")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyLogoPath)
                    .HasColumnName("company_logo_path")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyLogoUrl)
                    .HasColumnName("company_logo_url")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .HasColumnName("company_name")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyWebsiteUrl)
                    .HasColumnName("company_website_url")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.LeadId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Apilog>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("APILog", "fincheck");

                entity.Property(e => e.Endpoint)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Http)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Method)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Request)                    
                    .IsUnicode(false);

                entity.Property(e => e.Response)
                    .IsUnicode(false);

                entity.Property(e => e.StartTimeStamp)
                .HasColumnType("datetime");

                entity.Property(e => e.EndTimeStamp)
                .HasColumnType("datetime");

                entity.Property(e => e.Token)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Lead>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("Lead", "fincheck");

                entity.Property(e => e.Code)
                    .HasColumnName("code")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Offer>(entity =>
            {
                entity.HasKey(e => e.Key);

                entity.ToTable("Offer", "fincheck");

                entity.Property(e => e.CompanyLogoPath)
                    .HasColumnName("company_logo_path")
                    .HasMaxLength(10);

                entity.Property(e => e.CompanyLogoUrl)
                    .HasColumnName("company_logo_url")
                    .HasMaxLength(10);

                entity.Property(e => e.CompanyName)
                    .HasColumnName("company_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyWebsiteUrl)
                    .HasColumnName("company_website_url")
                    .HasMaxLength(10);

                entity.Property(e => e.Probability).HasColumnName("probability");

                entity.Property(e => e.Rank).HasColumnName("rank");

                entity.Property(e => e.Type)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Userable)
                    .HasColumnName("userable")
                    .HasMaxLength(10);
            });
        }
    }
}
