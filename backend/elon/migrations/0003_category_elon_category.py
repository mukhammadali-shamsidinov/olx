# Generated by Django 5.0.3 on 2024-03-31 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elon', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='elon',
            name='category',
            field=models.ManyToManyField(related_name='category', to='elon.category'),
        ),
    ]
