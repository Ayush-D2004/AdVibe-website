-- Enable OAuth providers
insert into auth.providers (provider_id, enabled)
values
  ('google', true),
  ('linkedin', true),
  ('facebook', true),
  ('instagram', true); 